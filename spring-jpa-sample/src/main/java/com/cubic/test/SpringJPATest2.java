package com.cubic.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cubic.service.CustomerService;
import com.cubic.vo.CustomerData;

public class SpringJPATest2 {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("SpringJPA.xml");
		CustomerService cs = context.getBean(CustomerService.class);
		CustomerData input = new CustomerData();
		input.setFirstName("Robert");
		input.setLastName("Matthew");
		input.setPk(new Long(1062));// see the id in database as i have 1062
									// with Robert KC it now changes to Robert
									// Matthew. but if we try

		CustomerData result = cs.modifyCustomer(input);
		System.out.println(result);

	}

}
