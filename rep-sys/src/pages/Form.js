import '../App.css';
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
// var mysql = require('mysql');  
// const fs = require('fs')
// let link = mysql.createConnection({
// 	host:'localhost',
// 	user:'phpma',
// 	password:'pass',
// 	database:'gGrades'
// })
// link.connect( function(err){
// 	if(!!err){
// 		console.log('Error')
// 	} else {
// 		console.log('Connect')
// 	}
// })

const handleSubmit = (event) => {
  event.preventDefault();
  var UserInfo
  console.log("Klasa: " + event.target.select.value)
  console.log("Imie: " + event.target.imie.value)
  console.log("Nazwisko: " + event.target.nazwisko.value)
  if(event.target.mLegitymacja != null){
  console.log("mLegitymacja: " + event.target.mLegitymacja.value)
  UserInfo = {
    Klasa: event.target.select.value,
    Imie: event.target.imie.value,
    Nazwisko: event.target.nazwisko.value,
    mLegitymacja: event.target.mLegitymacja.value
  }
  }

  if(event.target.msTeams != null ){
    console.log("msTeams: " + event.target.msTeams.value)
    UserInfo = {
      Klasa: event.target.select.value,
      Imie: event.target.imie.value,
      Nazwisko: event.target.nazwisko.value,
      msTeams: event.target.msTeams.value
    }}

  if(event.target.Zasw != null ){
    console.log("Zasw: " + event.target.Zasw.value)
    UserInfo = {
      Klasa: event.target.select.value,
      Imie: event.target.imie.value,
      Nazwisko: event.target.nazwisko.value,
      Zasw: event.target.Zasw.value
    }}

  if(event.target.pesel != null){
  console.log("Pesel: " + event.target.pesel.value)
  UserInfo = {
    Klasa: event.target.select.value,
    Imie: event.target.imie.value,
    Nazwisko: event.target.nazwisko.value,
    pesel: event.target.pesel.value
  }}

  if(event.target.applic != null){
    console.log("applic: " + event.target.applic.value)
    UserInfo = {
      Klasa: event.target.select.value,
      Imie: event.target.imie.value,
      Nazwisko: event.target.nazwisko.value,
      applic: event.target.applic.value
    }}

    exportUserInfo(UserInfo);
}
function exportUserInfo(UserInfo){
  const fileData = JSON.stringify(UserInfo);
  const blob = new Blob([fileData],{type: "text/plain"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "test.json";
  link.href = url;
  link.click();
}
function Form() {
  let { id } = useParams();
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>Klasa:
          <select name="select">
            <option value="4pt5" name="klasa">4PT5</option>
            <option value="5pt5" name="klasa">5PT5</option>
          </select>
        </label>
        <br></br>
        <label>Imie:
          <input
            type="text" name="imie"
          />
        </label>
        <br></br>
        <label>Nazwisko:
          <input
            type="text" name="nazwisko"
          /></label>



        {(() => {
          // console.log( id )
          switch ( id ) {
            case "pLegit":
              return (
                <label>{<br></br>}PESEL
                  <input type="text" name="pesel" maxLength={11} minLength={11}></input>
                </label>)
            case "mLegit":
              return (
                <label>{<br></br>}Kod do mLegitymacji
                  <input type="email" name="mLegitymacja"></input>
                </label>)
            case "pwdRstMs":
              return (
                <label>{<br></br>}Hasło do MS Teams
                  <input type="email" name="msTeams"></input>
                </label>)
            case "cert1":
              return (<label>{<br></br>}Zaświadczenie
                <textarea name="Zasw"></textarea>
              </label>)

            case "applic":
              return(<label>{<br></br>}Wniosek o stypendium
              <input type="text" name='applic'></input>
            </label>

              )
          }
        })()}





        {/* <br></br>
            <label>Kod do mLegitymacji
              <input type="email" name="mLegitymacja"></input>
            </label> */}


        {/* <br></br>
            <label>Hasło do MS Teams
              <input type="email" name="msTeams"></input>
            </label> */}


        {/* <br></br>
        <label>Zaświadczenie
          <textarea name="Zasw"></textarea>
        </label> */}


        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
