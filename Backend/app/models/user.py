from datetime import datetime, timezone


def user_document(
    name: str,
    email: str,
    password_hash: str,
) -> dict:
    now = datetime.now(timezone.utc)

    return {
        "name": name,
        "email": email,
        "password_hash": password_hash,
        "created_at": now,
        "updated_at": now,
    }