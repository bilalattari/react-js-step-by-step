import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Image, SearchOutlined } from "@mui/icons-material";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { Masonry } from "@mui/lab";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [chosen, setChosen] = useState(null);

  useEffect(() => {
    getImagesFromUnsplash();
  }, []);

  const getImagesFromUnsplash = () => {
    fetch(
      "https://api.unsplash.com/photos?page=1&client_id=oTO49XdAaqBeNW1n3tO0fOX6Qkhi_tC1UK4NvmQql-Q&per_page=30"
    )
      .then((res) => res.json())
      .then((res) => {
        setImages(res);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  };

  const searchPhotosFromUnsplash = () => {
    if (search) {
      fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=oTO49XdAaqBeNW1n3tO0fOX6Qkhi_tC1UK4NvmQql-Q&per_page=30`
      )
        .then((res) => res.json())
        .then((res) => {
          setImages(res.results);
          setLoading(false);
        })
        .catch((err) => setLoading(false));
    }
  };

  console.log(chosen);

  return (
    <div>
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "80%",
            overflow: "hidden",
          }}
        >
          <img
            width={"50%"}
            style={{
              maxHeight: 700,
            }}
            className="contain"
            src={chosen?.urls?.regular}
          />

          <Box display={"block"} width={"50%"} padding={2} bgcolor={"white"}>
            <Typography fontWeight={"bold"} variant="h4">
              {chosen?.alt_description}
            </Typography>
            <Box
              display={"flex"}
              sx={{
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              <Avatar
                sizes="medium"
                src={
                  chosen?.sponsorship?.sponsor?.profile_image?.medium ||
                  chosen?.user?.profile_image?.medium
                }
              />
              <Box marginLeft={1}>
                <Typography>
                  {chosen?.sponsorship?.sponsor?.name || chosen?.user?.name}
                </Typography>
                <Typography>
                  Total Photos :{" "}
                  {chosen?.sponsorship?.sponsor?.total_photos ||
                    chosen?.user?.total_photos}
                </Typography>
              </Box>
            </Box>

            <Typography fontWeight={"medium"} variant="h6">
              Likes : {chosen?.likes}
            </Typography>
          </Box>
        </Box>
      </Modal>
      <Header />
      <div className="container mx-auto">
        <Box
          display={"flex"}
          marginTop={2}
          marginBottom={2}
          gap={2}
          justifyContent={"space-between"}
        >
          <TextField
            id="outlined-basic"
            label="Search Your Images"
            fullWidth
            color="secondary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
          />
          <Button
            startIcon={<SearchOutlined />}
            disabled={search === "" || search.length < 3}
            variant="outlined"
            color="secondary"
            onClick={searchPhotosFromUnsplash}
          >
            Search
          </Button>
        </Box>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <CircularProgress color="secondary" size={50} />
          </Box>
        ) : null}

        <Masonry columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={2}>
          {images.map((item) => (
            <img
              onClick={() => {
                setShowModal(true);
                setChosen(item);
              }}
              key={item.id}
              src={item.urls.regular}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default App;
