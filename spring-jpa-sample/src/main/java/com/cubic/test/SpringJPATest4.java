package com.cubic.test;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cubic.service.CustomerService;
import com.cubic.vo.CustomerData;

public class SpringJPATest4 {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("SpringJPA.xml");
		CustomerService cs = context.getBean(CustomerService.class);
		List<CustomerData> results = cs.searchCustomer("r");
		System.out.println(results);

	}

}
