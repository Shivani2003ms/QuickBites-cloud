class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://username:password@your-rds-endpoint.amazonaws.com/dbname'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
