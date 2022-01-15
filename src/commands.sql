CREATE TABLE blogs(
    id SERIAL PRIMARY KEY,
    author text NOT NULL,
    url text NOT NULL,
    title text NOT NULL,
    likes INTEGER DEFAULT 0
);