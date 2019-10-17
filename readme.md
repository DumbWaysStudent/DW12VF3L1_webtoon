- **Create Image Episode**

## Tambah route delete data episode
```javascript
    router.post('/user/:userId/comic/:comicId/episode/:episodeId/image', authenticated, PageController.createImageEpisode)
```

## Buat fungsi untuk menympan datanya
```javascript
    exports.createImageEpisode = (req, res) => {
    Page.create(
        {
        page: req.body.page,
        image: req.body.image,
        episodeId: req.params.episodeId
        }
    ).then(pages=> res.send(pages))
    }
```

## Test Image Episode Implementation
<img src="./image_git/CreateImageEpisode.PNG" width="800" alt="webtoon"/>