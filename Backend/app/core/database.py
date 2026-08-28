from pymongo import AsyncMongoClient

from app.core.config import settings


client = AsyncMongoClient(settings.MONGO_URI)

database = client[settings.DATABASE_NAME]


def get_database():
    return database


async def initialize_database():
    await database.users.create_index(
        "email",
        unique=True,
    )