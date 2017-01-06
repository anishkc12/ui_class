package com.cubic.mapper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.cubic.entity.CustomerEntity;
import com.cubic.vo.CustomerData;

@Component
public class CustomerMapper {

	public CustomerEntity mapToCustomerEntity(final CustomerData input) {
		CustomerEntity entity = new CustomerEntity();
		entity.setFirstName(input.getFirstName());
		entity.setLastName(input.getLastName());
		entity.setPk(input.getPk());
		return entity;

	}

	public CustomerData mapToCustomerData(final CustomerEntity entity) {
		CustomerData data = new CustomerData();
		data.setFirstName(entity.getFirstName());
		data.setLastName(entity.getLastName());
		data.setPk(entity.getPk());
		return data;
	}

	public List<CustomerData> mapToCustomerData(final List<CustomerEntity> entities) {
		List<CustomerData> results = new ArrayList<CustomerData>();

		if (entities != null && !entities.isEmpty()) {
			for (CustomerEntity entity : entities) {
				CustomerData customerData = mapToCustomerData(entity);
				results.add(customerData);
			}
		}

		return results;
	}

}
