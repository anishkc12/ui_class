package com.cubic.service;

public interface TransactionParent {
	
	void methodRequired() throws Exception;
	
	void methodRequiresNew() throws Exception;
	
	void methodMandatory() throws Exception;
	
	void methodNever() throws Exception;
	
	void methodSupports() throws Exception;
	
	void methodNotSupported() throws Exception;
	
}
