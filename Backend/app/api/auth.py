from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from app.core.database import get_database
from app.core.security import decode_access_token
from app.schemas.auth import (
    AuthResponse,
    SigninRequest,
    SignupRequest,
    UserResponse,
)
from app.services.auth_service import signin, signup


router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)

security = HTTPBearer()


@router.post(
    "/signup",
    response_model=AuthResponse,
    status_code=status.HTTP_201_CREATED,
)
async def signup_endpoint(data: SignupRequest):
    return await signup(
        name=data.name,
        email=data.email,
        password=data.password,
    )


@router.post(
    "/signin",
    response_model=AuthResponse,
)
async def signin_endpoint(data: SigninRequest):
    return await signin(
        email=data.email,
        password=data.password,
    )


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
):
    token = credentials.credentials

    try:
        payload = decode_access_token(token)
        user_id = payload.get("sub")

        if not user_id:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication token",
            )

        if not ObjectId.is_valid(user_id):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid authentication token",
            )

    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired authentication token",
        )

    db = get_database()

    user = await db.users.find_one(
        {"_id": ObjectId(user_id)}
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found",
        )

    return user


@router.get(
    "/me",
    response_model=UserResponse,
)
async def get_me(
    current_user=Depends(get_current_user),
):
    return {
        "id": str(current_user["_id"]),
        "name": current_user["name"],
        "email": current_user["email"],
    }