self.onmessage = async (e) => {
  const { url, start, end, index } = e.data;

  try {
    const response = await fetch(url, {
      headers: { Range: `bytes=${start}-${end}` },
    });

    const buffer = await response.arrayBuffer();
    self.postMessage({ index, buffer });
  } catch (error) {
    self.postMessage({ index, error: error.message });
  }
};
