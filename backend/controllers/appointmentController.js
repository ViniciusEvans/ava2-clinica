const Appointment = require("../models/Appointment");
const axios = require("axios");

const appointmentController = {
  create: async (req, res) => {
    try {
      const { date, time, cep } = req.body;
      const addressResponse = await axios.get(
        `https://viacep.com.br/ws/${cep}/json/`,
      );
      const address = `${addressResponse.data.logradouro}, ${addressResponse.data.localidade}`;

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${addressResponse.data.localidade}&appid=${process.env.WEATHER_API_KEY}`,
      );
      const weatherAlert =
        weatherResponse.data.weather[0].main === "Rain"
          ? "Possível chuva no dia da consulta"
          : "Clima bom";

      const appointment = new Appointment({
        patient: req.user.id,
        date,
        time,
        address,
        weatherAlert,
      });
      await appointment.save();
      res.status(201).json(appointment);
  
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error creating appointment" });
    }
  },

  getAll: async (req, res) => {
    try {
      const appointments = await Appointment.find().populate("patient");
      res.json(appointments);
    
    } catch (err) {
      res.status(500).json({ message: "Error fetching appointments" });
    }
  },
};

module.exports = appointmentController;
