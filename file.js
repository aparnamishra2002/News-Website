document.addEventListener("DOMContentLoaded", function () {
  const articles = [
    {
      title: "Today Is “National Take Your Dog to Work Day”",
      img: "https://lh3.googleusercontent.com/M8JvfafrfqoRnprRGxJHbkWG16OG8JoeNtCrcYwBiVYw-cWxN5GgrReRVlzXja3FJqQUJMr0XWbhYuOMiJDKaPJNfr550S2QHAdCJ0Y8IrDI0kHLuYX7VDY-5EtkPu_q9EC1-Ls-tflFgQ3wzRjowPhtfF-VBgzzUup6cqxPtpUSxGHSkn25keHSPCO4QDmwkyGQ5anJu5fPJ7ANTD3sEaYB7kUxduap7qL5rcia67dJpSbsiF_UA1WuPNNnTc_Ab6zw_jDabrsPMF0ZHTse80freR2fatmKEZVs2lnbiDoBaHbzPbfH8kbDwUOx4ytFwJyIk7ktBqItI_SRc3eUqQX1b96E0N4n15C5rS1lXBBGBTYqoZ98cqGRJR8PFsY1G5q7ldM0nZ0Ymb8bf4AcVdK6gCJz4PfKM4wbv0QVEUDO9xkeqkZagTl9x2T-L2YKkQS8uujlTwiGUQSrhBYcy3k4GZm8-9nCGM2JtttAcHGC9AioBayz4dTYwDYgKJVS4TPScrrS9TjpbeMZGew-Jy_MoY1fxYkZTn_5zkf_KvqOpVevM6UO9w50kfmTwaMHgXJxsaxolemhKJQEUApn2CusIOnVyOyaC7f2AiLsMwbh_0DUx1jZZDnGc_fYAudR__2KjjmRtqkCJE0NtvFedsc3ubc1mvlUCHAf1HY7=w883-h662-no",
      content:
        "If you’re lucky enough to work from home, every day is “Take Your Dog to Work Day.” But most people aren’t, so today is the one day a year that many companies allow their employees to bring their pups with them...",
    },
    {
      title: "The future of Amazon drone deliveries",
      img: "https://lh3.googleusercontent.com/O-GwgRucU9UajDdrLy0WwaPJESwd6R0GstCU87GA3buQITe3ul6zugKTgk5yTE0m3taTPzzFCd59mdK4MfmCGJKT1APGOUaItRwLzfrz8oNillKB_lOt7N1UXPti2Z9iAV9Hz5G-PLE_JuOhQptTM_6RezVpmJ3A0PTkirKFFqH1BF4deDyWETv313LybeqpO3GSpg0TfNxaoPgOUuKsxuJpTVkjJ3Z0KMp8btQZJ_R-oNA04ey-UFqBc7BK7aJTU9cit96X4QvYmfrZ_1fXd0XXYXwSHcxMc3QQiTCUkMdSrtq9l89lY3v1yyl133-yw6F0cq8kk_c5w8TssjHnlH21LWynWK_ZOs8Vtu7gmteLffINKJh7gnHDZosbepzKB1-4axmkBtpfRPGVzbntWjF0kkycRmmGA8Xf8r-sftHmwuBFqHEGTF_ao45QlTxl2iVSjA44ETB7ErD9GmZBdxawc-NoZyXoEY3XcF5cpEEiaqHeROe5ZgNLqJWeCkhZVCCLfbKIb7iZ8Gvcge-BYwNUIb17_7KxO94LD99pieI4vTaFDJAZfiklrELeUjEyGd6yUOimIpyLrye42pQZ4k9YXFXxA6mqbpINUF5JxjGb4QvwS73o4LlcfocTmQ5R863l9oaV70hGER1Q0dgFK0IOl9sINBHOWwNi7K5S=w300-h168-no",
      content:
        "Amazon (AMZN, Tech30) has filed for a patent for beehive-like towers that would serve as multi-level fulfillment centers for its delivery drones to take off and land...",
    },
    
  ];

  function createArticle(article) {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    const img = document.createElement("img");
    img.src = article.img;
    articleDiv.appendChild(img);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("articlecontent");

    const title = document.createElement("h2");
    title.textContent = article.title;
    contentDiv.appendChild(title);

    const content = document.createElement("p");
    content.textContent = article.content;
    contentDiv.appendChild(content);

    articleDiv.appendChild(contentDiv);
    document.querySelector(".news").appendChild(articleDiv);
  }

  articles.forEach((article) => {
    createArticle(article);
  });
});
