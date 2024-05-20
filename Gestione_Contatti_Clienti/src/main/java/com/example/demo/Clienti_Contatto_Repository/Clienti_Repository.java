package com.example.demo.Clienti_Contatto_Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Conttati_Clienti_Entity.Clienti_Entity;

@Repository
public interface Clienti_Repository extends JpaRepository<Clienti_Entity,Long > {

}
