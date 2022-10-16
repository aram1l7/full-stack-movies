import React, { useRef } from "react";
import movieImg from "assets/images/movie.jpg";
import { capitalizeWord } from "utils/capitalizeWord";
import { removeNonAlphaNumeric } from "utils/removeNonAlphaNumeric";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredMovies } from "state/modules/movies/actions";
import { favoriteDataSelector } from "state/modules/movies/selectors";
import editIcon from "assets/icons/edit.svg";
import deleteIcon from "assets/icons/delete.svg";
import {
  BtnWrapper,
  DescriptionWrapper,
  Grid,
  Heading,
  IconWrapper,
  ImgWrapper,
  MovieCard,
  MovieTitle,
  MovieTitleWrapper,
  NotFound,
  SearchBar,
  StarButton,
  StarContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

function Movies({
  data,
  isFavorites,
  setIsFavorites,
  openEditModal,
  openDeleteModal,
}) {
  const inputRef = useRef();
  const timeout = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => favoriteDataSelector(state));
  let requestUrl = isFavorites ? "/search/favorites" : "/search";
  const handleDebounceSearch = () => {
    clearTimeout(timeout.current);
    if (!inputRef.current.value.trim()) {
      dispatch(
        setFilteredMovies({
          name: isFavorites ? "favorites" : "data",
          data: isFavorites ? favorites : data,
        })
      );
    }
    timeout.current = setTimeout(() => {
      axios
        .get(requestUrl, {
          params: { title: inputRef.current.value },
        })
        .then((res) => {
          dispatch(
            setFilteredMovies({
              name: isFavorites ? "favorites" : "data",
              data: res.data,
            })
          );
        })
        .catch((err) => {
          console.log(err, "err");
        });
    }, 600);
  };
  return (
    <div>
      <BtnWrapper>
        <Heading>{isFavorites ? "Favorites" : "Movies"}</Heading>
        <StarContainer
          className={isFavorites ? "active-favorites" : ""}
          onClick={() => {
            setIsFavorites(!isFavorites);
            inputRef.current.value = "";
          }}
        >
          <StarButton />
          Favorites
        </StarContainer>
      </BtnWrapper>
      <SearchBar
        onChange={handleDebounceSearch}
        ref={inputRef}
        type="text"
        placeholder={`Search for ${isFavorites ? "favorites" : "movies"}`}
      />

      {data.length > 0 ? (
        <Grid>
          {data.map((item) => {
            return (
              <MovieCard
                onClick={() => {
                  navigate(`/movies/${item.id}`);
                }}
                key={item.id}
              >
                <ImgWrapper>
                  <img src={item.poster_src || movieImg} alt={item.title} />
                </ImgWrapper>
                <MovieTitleWrapper>
                  <MovieTitle>
                    {capitalizeWord(removeNonAlphaNumeric(item.title))}
                  </MovieTitle>
                  <IconWrapper>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        openEditModal(item);
                      }}
                      className="edit-btn"
                    >
                      <img src={editIcon} alt="edit" />
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        openDeleteModal(item.id);
                      }}
                      className="delete-btn"
                    >
                      <img
                        className="trash-can"
                        src={deleteIcon}
                        alt="delete"
                      />
                    </div>
                  </IconWrapper>
                </MovieTitleWrapper>
                <DescriptionWrapper>
                  <span>Release date:</span>
                  <span>{item.year}</span>
                </DescriptionWrapper>
                <DescriptionWrapper>
                  <span>Runtime:</span>
                  <span>{item.runtime}</span>
                </DescriptionWrapper>
                <DescriptionWrapper>
                  <span>Genre:</span>
                  <span>{item.genre.map((el) => el).join(", ")}</span>
                </DescriptionWrapper>
                <DescriptionWrapper>
                  <span>Director:</span>
                  <span>{item.director}</span>
                </DescriptionWrapper>
              </MovieCard>
            );
          })}
        </Grid>
      ) : (
        <NotFound>
          No results found for your query {inputRef.current?.value}
        </NotFound>
      )}
    </div>
  );
}

export default Movies;
