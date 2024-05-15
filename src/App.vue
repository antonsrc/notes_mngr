<template>
    <div id="app">
        <div id="header">notes manager</div>
        <router-view />
    </div>
</template>

<style>
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#header {
    color: rgb(255, 255, 255);
    background: rgba(25, 175, 100);
    padding: 0.3rem 0.7rem 0.5rem;
    font-size: 1.2rem;
}

.Btn {
    cursor: pointer;
    padding: 0.3rem 0.7rem 0.5rem;
    width: 300px;
    text-align: center;
    background-color:rgb(255, 234, 149);
    color:black;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
}

.ErrorMessage {
    color: red;
    padding: 0.3rem 0.7rem 0.5rem;
    font-size: 2rem;
    background-color: yellow;
}
</style>