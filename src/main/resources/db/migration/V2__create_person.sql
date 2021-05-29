create table person
(
    id            bigint      not null
        constraint person_pkey primary key generated always as identity,
    first_name    varchar(60) not null,
    last_name     varchar(60),
    date_of_birth timestamp,
    phone_number  varchar(255)
);
