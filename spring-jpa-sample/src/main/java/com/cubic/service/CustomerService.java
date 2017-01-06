package com.cubic.service;

import java.util.List;

import com.cubic.vo.CustomerData;

public interface CustomerService {

	CustomerData registerCustomer(final CustomerData data);

	CustomerData modifyCustomer(final CustomerData data);

	void removeCustomer(final Long customerID);

	List<CustomerData> searchCustomer(final String name);
}
