create table app_user
(
    id                 bigint      not null
        constraint app_user_pkey primary key generated always as identity,
    login              varchar(50) not null
        constraint ux_user_login unique,
    password_hash      varchar(60) not null,
    first_name         varchar(50),
    last_name          varchar(50),
    email              varchar(191)
        constraint ux_user_email unique,
    image_url          varchar(256),
    activated          boolean     not null,
    lang_key           varchar(10),
    activation_key     varchar(20),
    reset_key          varchar(20),
    created_by         varchar(50) not null,
    created_date       timestamp,
    reset_date         timestamp,
    last_modified_by   varchar(50),
    last_modified_date timestamp
);
INSERT INTO app_user (login, password_hash, first_name, last_name, email, image_url, activated, lang_key,
                      activation_key, reset_key, created_by, created_date, reset_date, last_modified_by,
                      last_modified_date)
VALUES ('admin', '$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC', 'Administrator', 'Administrator',
        'admin@localhost', '', true, 'en', null, null, 'system', null, null, 'system', null),
       ('user', '$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K', 'User', 'User', 'user@localhost', '',
        true, 'en', null, null, 'system', null, null, 'system', null);

create table user_authority
(
    id      bigint      not null
        constraint user_authority_pkey primary key generated always as identity,
    user_id bigint      not null
        constraint fk_user_id references app_user,
    name    varchar(50) not null
);
INSERT INTO public.user_authority (user_id, name)
VALUES (1, 'ROLE_ADMIN'),
       (1, 'ROLE_USER'),
       (2, 'ROLE_USER');
