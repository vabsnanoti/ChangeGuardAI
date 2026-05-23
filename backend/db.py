import psycopg2


def get_connection():

    connection = psycopg2.connect(
        host="postgres",
        database="changeguard",
        user="admin",
        password="admin"
    )

    return connection
