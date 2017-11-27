pipeline {
  agent any
  environment {
    KUBE_URL = credentials('KUBE_URL')
    KUBE_TOKEN = credentials('KUBE_TOKEN')
    DOCKER_URL = credentials('DOCKER_URL')
    DOCKER_USERNAME = credentials('DOCKER_USERNAME')
    DOCKER_PASSWORD = credentials('DOCKER_PASSWORD')
  }
  stages {
  stage('Extract Version') {
    steps {
      export VERSION=$(cat package.json | jq -r ".version") && echo $VERSION > VERSION
    }
  }
    stage('Build Image') {
      steps {
        docker build -t $DOCKER_URL/$JOB_NAME:$(cat VERSION) .
      }
    }
    stage('Push Image') {
      steps {
        docker login $DOCKER_URL -u=$DOCKER_USERNAME -p=$DOCKER_PASSWORD
        docker push $DOCKER_SERVER/$DOCKER_IMAGE:$(cat VERSION)
      }
    }
  }
}
