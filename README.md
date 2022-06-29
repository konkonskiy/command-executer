# command-executer
This is a command executer to Node.js and TypeScript

In this case App work to  [Ffmpeg program](https://ffmpeg.org/)

## Run util command

```sh
$ node ./dist/App.js 
```

## Interface 

![image](https://user-images.githubusercontent.com/66328416/176381801-2af748d7-e85b-4ec1-aed8-bee58b603a7e.png)

#### Ffmpeg settings

```sh
ffmpeg -i ${path} -c:v libx264 -s ${width}x${height} /${path}/${name}.mp4
```

#### Patterns 
- Builder
- Template method
- Singleton

#### Dependencies

- inquirer - 8.2.0
- Node.js - v16.15.1

###### Node lib

- @types/node - 18.0.0
- child_process
- path
- fs
