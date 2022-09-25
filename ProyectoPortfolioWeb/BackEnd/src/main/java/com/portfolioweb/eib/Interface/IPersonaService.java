/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolioweb.eib.Interface;

import com.portfolioweb.eib.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer  una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar objeto por ID
    public void deletePersona(Long Id);
    
    //Buscar persona por ID
    public Persona findPersona(Long Id);
}
