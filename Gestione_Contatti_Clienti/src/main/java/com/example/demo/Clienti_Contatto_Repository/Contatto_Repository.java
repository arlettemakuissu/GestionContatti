package com.example.demo.Clienti_Contatto_Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Conttati_Clienti_Entity.Contatto_Entity;

@Repository
public interface Contatto_Repository extends JpaRepository<Contatto_Entity, Long>{
	
	

}
