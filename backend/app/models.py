from sqlalchemy import Column
from sqlalchemy import Float
from sqlalchemy import Integer
from sqlalchemy import String

from app.database import Base


class Keyword(Base):

    __tablename__ = "keywords"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    keyword = Column(
        String,
        unique=True,
        nullable=False
    )

    volume = Column(Integer)

    difficulty = Column(Float)

    cpc = Column(Float)

    competition = Column(Float)

    source = Column(String)