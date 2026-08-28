from fastapi import HTTPException, status

from app.core.database import get_database
from app.core.security import (
    create_access_token,
    hash_password,
    verify_password,
)
from app.models.user import user_document


async def signup(
    name: str,
    email: str,
    password: str,
):
    db = get_database()

    existing_user = await db.users.find_one(
        {"email": email.lower()}
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email is already registered",
        )

    document = user_document(
        name=name,
        email=email.lower(),
        password_hash=hash_password(password),
    )

    result = await db.users.insert_one(document)

    user_id = str(result.inserted_id)

    token = create_access_token(user_id)

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": user_id,
            "name": document["name"],
            "email": document["email"],
        },
    }


async def signin(
    email: str,
    password: str,
):
    db = get_database()

    user = await db.users.find_one(
        {"email": email.lower()}
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    if not verify_password(
        password,
        user["password_hash"],
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    user_id = str(user["_id"])

    token = create_access_token(user_id)

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": user_id,
            "name": user["name"],
            "email": user["email"],
        },
    }