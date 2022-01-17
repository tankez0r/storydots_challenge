import axios from "axios";


const token = localStorage.getItem('token');
const config = {
  headers: {
    'Authorization': 'Bearer ' + token

  },
};








export const queryGetAll = async (section, setState) => {
  const url = `http://localhost:3002/api/${section}/`;
  let res = await axios.get(url);
  try {
    setState(res.data)
  } catch (error) {
    console.log(error);
  }
};

export const queryGetData = async (section, ID, setState) => {
  const url = `http://localhost:3002/api/${section}/${ID}`;
  let res = await axios.get(url);
  try {
    console.log(res)
    const { nombre, descripcion, precio, marca_id, imagenes, id, logo_imagen } = res.data.data;
    const url1 = imagenes[0] ? imagenes[0].image_url : "";
    const url2 = imagenes[1] ? imagenes[1].image_url : "";
    const url3 = imagenes[2] ? imagenes[2].image_url : "";
    setState({ nombre, descripcion, precio, url1, url2, url3, logo_imagen, id, marca_id })
  } catch (error) {
    console.log(error);
  }
};

export const imgProductoQuery = async (img, id) => {
  const urlQuery = 'http://localhost:3002/api/producto_imagen/';
  const { url1, url2, url3 } = img;
  console.log(img, id)
  axios.all([axios.post(urlQuery, { image_url: url1, producto_id: id }, config),
  axios.post(urlQuery, { image_url: url2, producto_id: id }, config),
  axios.post(urlQuery, { image_url: url3, producto_id: id }, config)]).
    then(
      axios.spread(
        (data1, data2, data3) => { console.log(data1, data2, data3) }
      )
    )

}

export const queryPostCreateData = async (section, queryObject) => {
  const url = `http://localhost:3002/api/${section}/`;
  const { data } = await axios.post(url, queryObject, config)

  try {
    console.log(data.data.id);
    console.log(queryObject);
    return data.data.id

  } catch (error) {
    console.log(error);
  }
};



export const queryPostEditData = async (section, queryObject) => {
  const url = `http://localhost:3002/api/${section}/${queryObject.id}`;
  const data = await axios.put(url, queryObject, config);
  try {
    console.log(data.status);
    console.log(queryObject);
  } catch (error) {
    console.log(error);
  }
};
export const queryDeleteData = async (section, queryObject) => {
  const url = `http://localhost:3002/api/${section}/${queryObject.id}`;
  const data = await axios.delete(url, config);
  try {
    console.log(data.status)
  } catch (error) {
    console.log(error);
  }
};




