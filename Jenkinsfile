pipeline {
  agent any

  environment {
   KUBE_URL = credentials('arjun.KUBE')
  }

  stages {
  stage('Export Version') {
      steps {
        echo $KUBE_URL
        sh 'export VERSION=$(cat package.json | jq -r ".version") && echo $VERSION > VERSION'
      }
    }
    stage('Build Image') {
        steps {
          sh 'docker build -t $DOCKER_URL/$DOCKER_IMAGE:$(cat VERSION) .'
        }
      }
      stage('Push Image') {
          steps {
            sh 'docker login $DOCKER_URL -u=$DOCKER_USERNAME -p=$DOCKER_PASSWORD'
            sh 'docker push $DOCKER_URL/$DOCKER_IMAGE:$(cat VERSION)'
          }
        }
        stage('Deploy') {
            steps {
              sh 'export VERSION=$(cat package.json | jq -r ".version") && echo $VERSION > VERSION'
            }
          }
  }
}
