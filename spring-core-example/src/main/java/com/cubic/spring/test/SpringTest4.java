package com.cubic.spring.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cubic.product.ProductService;
import com.cubic.product.ProductServiceimple;
import com.cubic.spring.ProductVO;

public class SpringTest4 {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("SpringContext.xml");
		ProductVO result = context.getBean("productObjConst1",ProductVO.class);
		System.out.println(result);
		
		result = context.getBean("productObjConst2",ProductVO.class);
		System.out.println(result);
	
	}

}
