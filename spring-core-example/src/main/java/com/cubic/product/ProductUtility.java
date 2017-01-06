package com.cubic.product;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.cubic.spring.CustomerVO;

public class ProductUtility { 
	
	private List<Customer> customers = null;
	
	private Set<String> versions = null;
	
	private Set<CustomerVO> mycustomers = null;
	
	private Map<Customer, CustomerVO> customerMap = null;
	
	public Map<Customer, CustomerVO> getCustomerMap() {
		return customerMap;
	}

	public void setCustomerMap(Map<Customer, CustomerVO> customerMap) {
		this.customerMap = customerMap;
	}

	public Set<CustomerVO> getMycustomers() {
		return mycustomers;
	}

	public void setMycustomers(Set<CustomerVO> mycustomers) {
		this.mycustomers = mycustomers;
	}

	public Set<String> getVersions() {
		return versions;
	}

	public void setVersions(Set<String> versions) {
		this.versions = versions;
	}

	public List<Customer> getCustomers() {
		return customers;
	}

	public void setCustomers(List<Customer> customers) {
		this.customers = customers;
	}

	

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProductUtility other = (ProductUtility) obj;
		if (customers == null) {
			if (other.customers != null)
				return false;
		} else if (!customers.equals(other.customers))
			return false;
		if (mycustomers == null) {
			if (other.mycustomers != null)
				return false;
		} else if (!mycustomers.equals(other.mycustomers))
			return false;
		if (versions == null) {
			if (other.versions != null)
				return false;
		} else if (!versions.equals(other.versions))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ProductUtility [customers=" + customers + ", versions=" + versions + ", mycustomers=" + mycustomers
				+ ", customerMap=" + customerMap + "]";
	}

}
