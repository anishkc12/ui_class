package com.cubic.notify;

import com.cubic.spring.ProductVO;

public class EmailNotification implements NotifyService{

	public void notify(ProductVO vo) {
		// TODO Auto-generated method stub
		
		System.out.println("Notified by email");
		
	}
	

}
