package com.anilb.myrestservice.repository;

import com.anilb.myrestservice.domain.Authority;
import org.springframework.data.repository.CrudRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends CrudRepository<Authority, String> {}
