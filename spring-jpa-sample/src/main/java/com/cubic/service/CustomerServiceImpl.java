package com.cubic.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cubic.entity.CustomerEntity;
import com.cubic.mapper.CustomerMapper;
import com.cubic.repo.CustomerRepository;
import com.cubic.vo.CustomerData;

@Service
public class CustomerServiceImpl implements CustomerService {

	private final static Logger logger = LoggerFactory.getLogger(CustomerServiceImpl.class);

	@Autowired
	private CustomerMapper mapper;

	@Autowired
	private CustomerRepository repo;

	@Override
	public CustomerData registerCustomer(CustomerData data) {
		logger.debug("Entering CustomerServiceImpl.registerCustomer");

		final CustomerEntity entity = mapper.mapToCustomerEntity(data);
		repo.save(entity);
		data.setPk(entity.getPk());
		logger.debug("PK ={} ", entity.getPk());
		logger.debug("Existing CustomerSErviceImpl.registerCustomer");
		return data;
	}

	@Override
	public CustomerData modifyCustomer(CustomerData data) {
		if (data.getPk() != null && repo.exists(data.getPk())) {

			final CustomerEntity entity = mapper.mapToCustomerEntity(data);
			repo.save(entity);
			data.setPk(entity.getPk());
		} else {
			throw new IllegalArgumentException("Invalid Customer. Not found in the database");
		}
		return data;

	}

	public void removeCustomer(Long customerID) {
		if (customerID != null && repo.exists(customerID)) {
			repo.delete(customerID);
		}

	}

	@Override
	public List<CustomerData> searchCustomer(String name) {
		List<CustomerEntity> result = repo.search(name + "%", name + "%");
		return mapper.mapToCustomerData(result);
	}

}
