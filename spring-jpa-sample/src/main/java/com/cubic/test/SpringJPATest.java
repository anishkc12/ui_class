package com.cubic.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cubic.service.CustomerService;
import com.cubic.vo.CustomerData;

public class SpringJPATest {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("SpringJPA.xml");
		CustomerService cs = context.getBean(CustomerService.class);
		CustomerData input = new CustomerData();
		input.setFirstName("Robert");
		input.setLastName("KC");

		CustomerData result = cs.registerCustomer(input);
		System.out.println(result);

	}

}
