import Axios from "axios";
const Auth = "fb9be11a669f4d06be297ee37ab7f4c6";
const Base_URL = "https://newsapi.org/v2/";

const topNews = async ({ onCountChange, onCatChange }) => {
  return await Axios.get(
    `${Base_URL}top-headlines?country=${onCountChange}&category=${onCatChange}&pageSize=20&apiKey=${Auth}`
  );
};

const businessNews = async ({ onCountChange }) => {
  return await Axios.get(
    `${Base_URL}top-headlines?country=${onCountChange}&category=business&pageSize=20&apiKey=${Auth}`
  );
};

const entertainmentNews = async ({ onCountChange }) => {
  return await Axios.get(
    `${Base_URL}top-headlines?country=${onCountChange}&category=entertainment&pageSize=20&page=3&apiKey=${Auth}`
  );
};

const healthNews = async ({ onCountChange }) => {
  return await Axios.get(
    `${Base_URL}top-headlines?country=${onCountChange}&category=health&pageSize=20&apiKey=${Auth}`
  );
};

const scienceNews = async ({ onCountChange }) => {
  return await Axios.get(
    `${Base_URL}top-headlines?country=${onCountChange}&category=science&pageSize=20&apiKey=${Auth}`
  );
};

const sportsNews = async ({ onCountChange }) => {
  return await Axios.get(
    `${Base_URL}top-headlines?country=${onCountChange}&category=sports&pageSize=20&apiKey=${Auth}`
  );
};

const technologyNews = async ({ onCountChange }) => {
  return await Axios.get(
    `${Base_URL}top-headlines?country=${onCountChange}&category=technology&pageSize=20&apiKey=${Auth}`
  );
};

const covidNews = async () => {
  return await Axios.get(`https://coronavirus-19-api.herokuapp.com/countries`);
};

const searchNews = async search => {
  return await Axios.get(
    `${Base_URL}everything?q=${search}&sortBy=publishedAt&apiKey=${Auth}`
  );
};

export {
  topNews,
  businessNews,
  entertainmentNews,
  healthNews,
  scienceNews,
  sportsNews,
  technologyNews,
  covidNews,
  searchNews
};
