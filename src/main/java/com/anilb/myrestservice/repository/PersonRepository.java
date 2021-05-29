package com.anilb.myrestservice.repository;

import com.anilb.myrestservice.domain.Person;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Person entity.
 */
@Repository
public interface PersonRepository extends PagingAndSortingRepository<Person, Long> {}
