package com.cubic.person.soapws;

import java.math.BigInteger;

import javax.jws.WebService;

import com.training.soap.service.PersonServicePortType;
import com.training.soap.service.PersonServiceRequestType;
import com.training.soap.service.PersonServiceResponseType;
import com.training.soap.service.PersonType;

@WebService(serviceName="PersonService", targetNamespace="http://com.cubic.net/personservice/1.0",
portName="PersonServicePort", endpointInterface="com.training.soap.service.PersonServicePortType",
wsdlLocation="WEB-INF/wsdl/PersonService.wsdl")

public class PersonSoapWS implements PersonServicePortType {

	@Override
	public PersonServiceResponseType searchPerson(PersonServiceRequestType request){
		PersonServiceResponseType response = new PersonServiceResponseType();
		response.getPersonType().add(createPerson("Ronadl", "Regan"));
		response.getPersonType().add(createPerson("Sameul", "Miller"));
		response.getPersonType().add(createPerson("Jerry", "Smith"));
		return response;
	}
	private PersonType createPerson (final String firstName, final String lastName){
		PersonType person = new PersonType();
		person.setFirstName(firstName);
		person.setLastName(lastName);
		person.setAge(BigInteger.valueOf(27));
		return person;
	}
	
}
