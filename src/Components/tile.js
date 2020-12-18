import React, { useState, useEffect } from "react";
import { Image, Button, Modal } from "antd";
import {
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined
} from "@ant-design/icons";
import { TilesSet } from "./tilesArray.json";
import NV from "./NV.png";

const Tiles = () => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [pre, setPre] = useState(1);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tiles, setTiles] = useState(TilesSet);
  useEffect(() => {}, [setY, setX, pre]);
  // const [agent, setAgent] = useState(false);
  // const [visited, setVisited] = useState(false);
  const id = tiles.find(tile => tile.x === x && tile.y === y).id;

  {
    console.log(x + " and " + y + " tile " + id);
  }

  useEffect(() => {}, [tiles]);

  const handleScore = () => {
    setScore(score - 1);
    if (tiles[id].value == "pit") {
      setScore(score - 1000);
      setEnd(true);
    }
    setIsModalVisible(true);
    if (tiles[id].value == "wumpus") {
      setScore(score - 1000);
      setEnd(true);
    }
    if (tiles[id].value == "gold") setScore(score + 1000);

    console.log(end);
  };

  const handleRight = () => {
    if (y < 4 && !end) {
      handleScore();
      setPre(id);
      setY(y + 1);

      tiles[pre].agent = false;
      tiles[id].agent = true;
      tiles[id].visited = true;
    }
  };

  const handleDown = () => {
    if (x < 4 && !end) {
      handleScore();
      setPre(id);
      setX(x + 1);
      tiles[pre].agent = false;
      tiles[id].visited = true;
      tiles[id].agent = true;
    }
  };
  const handleUp = () => {
    if (x > 1 && !end) {
      setPre(id);
      setX(x - 1);
      handleScore();
      tiles[pre].agent = false;
      tiles[id].agent = true;
    }
  };

  const handelLeft = () => {
    if (y > 1 && !end) {
      setPre(id);
      setY(y - 1);
      handleScore();
      tiles[pre].agent = false;
      tiles[id].agent = true;
    }
  };

  return (
    <>
      <Buttons
        handelLeft={handelLeft}
        handleDown={handleDown}
        handleRight={handleRight}
        handleUp={handleUp}
      ></Buttons>
      <ScoreCard end={end} score={score}></ScoreCard>
      {tiles.map(tile => (
        <Tile tile={tile}></Tile>
      ))}
    </>
  );
};

const Buttons = ({ handelLeft, handleDown, handleRight, handleUp }) => {
  return (
    <div style={{ margin: "50px" }}>
      <Button
        type="primary"
        shape="circle"
        icon={<DownOutlined />}
        onClick={handleDown}
      />
      <Button
        type="primary"
        shape="circle"
        onClick={handleUp}
        icon={<UpOutlined />}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<LeftOutlined />}
        onClick={handelLeft}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<RightOutlined />}
        onClick={handleRight}
      />
    </div>
  );
};

const Tile = ({ tile }) => {
  var image = NV;

  if (tile.visited) {
    if (tile.agent) image = tile.image2;
    else image = tile.image1;
  }

  return (
    <div
      style={{
        display: "inline-block"
      }}
    >
      <Image style={{ width: "150px", height: "150px" }} src={image}></Image>
    </div>
  );
};

const ScoreCard = ({ score, end }) => {
  return (
    <div style={{ margin: "30px" }}>
      {!end ? (
        <p>
          Score: <strong>{score}</strong>
        </p>
      ) : (
        <p>
          <strong>Game over</strong>
        </p>
      )}
    </div>
  );
};
export default Tiles;
