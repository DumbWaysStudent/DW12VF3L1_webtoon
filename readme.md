- **Detail Episode Implementation**

## Buat file migration create-page

## Buat file seeder untuk mengisi tabel episodes
```javascript
    return queryInterface.bulkInsert('episodes', [
        {
            "page": 1,
            "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
            "createdAt": "2019-10-10T08:31:21+00:00",
            "updatedAt": "2019-10-10T08:31:21+00:00"
        },
        {
            "page": 2,
            "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
            "createdAt": "2019-10-10T08:31:21+00:00",
            "updatedAt": "2019-10-10T08:31:21+00:00"
        },
        {
            "page": 3,
            "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
            "createdAt": "2019-10-10T08:31:21+00:00",
            "updatedAt": "2019-10-10T08:31:21+00:00"
        }
    ])
```

## Membuat relasi pada tabel comics dan tabel episodes
```javascript
    //di model episode
    episode.associate = function(models) {
        // associations can be defined here
        episode.belongsTo(models.comic,{
        foreignKey:'comicId',
        })
        episode.hasMany(models.page,{
        foreignKey:'episodeId',
        })
    };

    //di model page
    page.associate = function(models) {
        // associations can be defined here
        page.belongsTo(models.episode,{
        foreignKey:'episodeId',
        })
    };
```

## Membuat file model page.js dan membuat fungsi untuk menampilkan data episode berdasarkan episodeId
```javascript
    //show all page based on episodeId
    exports.indexPage = (req, res) => {
        episodeId = req.params.episodeId
        Page.findAll({where: {episodeId: episodeId}}).then(pages=>res.send(pages))
    }
```

## Membuat function di episode.js untuk meampilkan data per id
```javascript
    //show data based on id
    exports.show = (req, res) => {
        Episode.findOne({id: req.params.id}).then(episodes=> res.send(episodes))
    }
```

## Buat route untuk menampilkan episode berdasarkan id dan menampilkan isi data page berdasarkan episodeId
```javascript
    //get episode based on id comic
    router.get('/episode/:id', EpisodeController.show)

    //get pages from episode based on episodeId
    router.get('/episode/:episodeId/pages', PageController.indexPage)

    //Page
    router.get('/pages',PageController.index)
```

## Test For You Implementation
<img src="./image_git/DetailEpisode.PNG" width="800" alt="webtoon"/>