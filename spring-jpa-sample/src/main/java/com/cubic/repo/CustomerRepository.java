package com.cubic.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cubic.entity.CustomerEntity;

public interface CustomerRepository extends CrudRepository<CustomerEntity, Long> {
	@Query("select c from CustomerEntity c where UPPER(c.firstName) like UPPER(?1) OR UPPER(c.lastName) like UPPER(?2)")

	List<CustomerEntity> search(final String lastName, String firstName);

}
