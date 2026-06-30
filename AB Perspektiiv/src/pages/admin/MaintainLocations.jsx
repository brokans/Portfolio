import { useEffect, useRef, useState } from "react";
import { readCollection, writeCollection } from "../../lib/database";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function MaintainLocations() {
  const [shops, setShops] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const addressRef = useRef();
  const urlRef = useRef();

  useEffect(() => {
    readCollection("shops")
      .then((json) => {
        setShops(json);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  function addShop() {
    const updatedShops = [
      ...shops,
      {
        name: nameRef.current.value,
        open: openTimeRef.current.value,
        lati: Number(latitudeRef.current.value),
        long: Number(longitudeRef.current.value),
        address: addressRef.current.value,
        url: urlRef.current.value,
      },
    ];
    setShops(updatedShops);
    writeCollection("shops", updatedShops);
  }

  function deleteShop(index) {
    const updatedShops = shops.filter((_, i) => i !== index);
    setShops(updatedShops);
    writeCollection("shops", updatedShops);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <label htmlFor="shop-name">Stuudio nimi:</label>
      <br />
      <input ref={nameRef} id="shop-name" type="text" />
      <br />
      <label htmlFor="shop-open">Lahtioleku aeg:</label>
      <br />
      <input ref={openTimeRef} id="shop-open" type="text" />
      <br />
      <label htmlFor="shop-lat">Laiuskraad:</label>
      <br />
      <input ref={latitudeRef} id="shop-lat" type="text" />
      <br />
      <label htmlFor="shop-long">Pikkuskraad:</label>
      <br />
      <input ref={longitudeRef} id="shop-long" type="text" />
      <br />
      <label htmlFor="shop-address">Aadress:</label>
      <br />
      <input ref={addressRef} id="shop-address" type="text" />
      <br />
      <label htmlFor="shop-url">Google Maps URL:</label>
      <br />
      <input ref={urlRef} id="shop-url" type="text" />
      <br />
      <Button variant="success" onClick={addShop}>
        Lisa
      </Button>
      <br />
      <br />
      {shops.map((shop, index) => (
        <div key={shop.name || index}>
          <div>{shop.name}</div>
          <div>Avatud: {shop.open}</div>
          <div>{shop.address}</div>
          <Button variant="dark" onClick={() => deleteShop(index)}>
            X
          </Button>
          <Button
            as={Link}
            to={`/admin/maintain-locations/edit-location/${index}`}
          >
            Muuda
          </Button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default MaintainLocations;
