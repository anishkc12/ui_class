package com.cubic.spring.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cubic.product.ProductService;
import com.cubic.product.ProductServiceimple;
import com.cubic.product.ProductUtility;
import com.cubic.spring.ProductVO;
import com.cubic.spring.SpringFactory;

public class SpringTest5 {

	public static void main(String[] args) {
		
		ProductUtility pu = SpringFactory.getInstance().getBean(ProductUtility.class);
		
		System.out.println(pu.getCustomers());
		System.out.println(pu.getVersions());
		System.out.println(pu.getMycustomers());
		System.out.println(pu.getCustomerMap());
	}

}
