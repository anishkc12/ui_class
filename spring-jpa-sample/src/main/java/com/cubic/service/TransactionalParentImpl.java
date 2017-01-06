package com.cubic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.cubic.entity.CustomerEntity;
import com.cubic.repo.CustomerRepository;

@Service
@Transactional(propagation = Propagation.SUPPORTS)
public class TransactionalParentImpl implements TransactionParent {

	@Autowired
	private CustomerRepository repo;

	@Autowired
	private TransactionChild childImpl;

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public void methodRequired() throws Exception {
		createRecord();
		// childImpl.methodRequiresNew();
		// childImpl.methodRequired();
		// childImpl.methodMandatory();
		childImpl.methodNotSupported();
		// throw new RuntimeException("Testing");
		// childImpl.methodNotSupported();
	}

	@Transactional(propagation = Propagation.REQUIRES_NEW)
	@Override
	public void methodRequiresNew() throws Exception {
		createRecord();

	}

	@Transactional(propagation = Propagation.MANDATORY)
	@Override
	public void methodMandatory() throws Exception {
		createRecord();

	}

	@Transactional(propagation = Propagation.NEVER)
	@Override
	public void methodNever() throws Exception {
		createRecord();

	}

	@Override
	public void methodSupports() throws Exception {
		createRecord();

	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	@Override
	public void methodNotSupported() throws Exception {
		createRecord();

	}

	private void createRecord() {
		CustomerEntity entity = new CustomerEntity();
		entity.setFirstName("Parent");
		entity.setLastName("Transaction");
		repo.save(entity);
	}

}
