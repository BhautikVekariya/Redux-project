import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultsGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          console.log(response.results);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        if (activeTab === "videos") {
          const response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user?.name || "Video",
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            url: item.url,
          }));
        }
        if (activeTab === "gif") {
          const response = await fetchGIF(query);
          console.log("GIF RESPONSE ", response);

          data = response.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail:
              item.media_formats?.tinygif?.url || item.media_formats?.gif?.url,
            src: item.media_formats?.gif?.url,
            url: item.itemurl || item.url,
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTab, dispatch]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultsGrid;
