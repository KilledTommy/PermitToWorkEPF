<<<<<<< HEAD:admin.html
﻿<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS Website Layout</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="admin.css" type="text/css"/>

</head>
<body>

    <div class="topnav">
        <a href="index.html">Check In</a>
        <a href="#">Calendar</a>
        <a href="admin.html">Admin</a>
        <a href="#" style="float:right">Log in</a>
    </div>


    <div class="row">
            <h2>Admin</h2>
            <input type="button" value="Import Users" />
            <input type="button" value="Export Users" />
            <input type="button" value="Import Calendar" />
            <input type="button" value="Export Calendar" />

    </div>

    <div class="row">
            <h2>Users</h2>
            <div>
                <input type="button" value="Add" />
                <input type="button" value="Remove" />
            </div>
            <table>
                <thead>
                    <tr><th></th><th>Name</th><th>Id</th><th>Team</th><th>Graduation</th><th>Last Chrck in</th></tr>
                </thead>
                <tbody>
                    <tr><td><input type="checkbox" value="user" /></td><td>Tim </td>  <td>123456</td><td>Rover</td><td>1919</td><td>01/10/2020</td></tr>
                    <tr><td><input type="checkbox" value="user" /></td><td>Bob </td>  <td>789101</td><td>SRC</td><td>2020</td><td>01/01/1918</td></tr>
                    <tr><td><input type="checkbox" value="user" /></td><td>Landes</td><td>121314</td><td>Rovket</td><td>2025</td><td>03/05/2005</td></tr>
                </tbody>
            </table>
    </div>
    <div class="footer">
        <p>Sooner Rover Team is the best!</p>
    </div>


</body>
</html>
=======
import React from 'react';
import logo from './logo.svg';
import './Admin.css';

function Admin() {
  return (
    <div className="Admin">
      <header className="Admin-header">


    <div class="topnav">
        <a href="#">Check In</a>
        <a href="#">Calendar</a>
        <a href="#">Admin</a>
        <a href="#" style={{float:'right'}}>Log in</a>
    </div>


    <div class="row">
        <div class="column">
            <h2>Admin</h2>
            <input type="button" value="Import Users" />
            <input type="button" value="Export Users" />
            <input type="button" value="Import Calendar" />
            <input type="button" value="Export Calendar" />
        </div>
    </div>

    <div class="row">
            <h2>Users</h2>
            <div>
                <input type="button" value="Add" />
                <input type="button" value="Remove" />
            </div>
            <table>
                <thead>
                    <tr><th></th><th>Name</th><th>Id</th><th>Team</th><th>Graduation</th><th>Last Chrck in</th></tr>
                </thead>
                <tbody>
                    <tr><td><input type="button" value="user" /></td><td>Tim </td>  <td>123456</td><td>Rover</td><td>1919</td><td>01/10/2020</td></tr>
                    <tr><td><input type="button" value="user" /></td><td>Bob </td>  <td>789101</td><td>SRC</td><td>2020</td><td>01/01/1918</td></tr>
                    <tr><td><input type="button" value="user" /></td><td>Landes</td><td>121314</td><td>Rovket</td><td>2025</td><td>03/05/2005</td></tr>
                </tbody>
            </table>
    </div>
    <div class="footer">
        <p>Footer</p>
    </div>


              </header>
    </div>
  );
}

export default Admin;
>>>>>>> b04921fc8659f890443d401332afa585e5e45a37:react-project/src/Admin.js
