pipeline {
  agent any

environment {
KUBE_URL = credentials('KUBE_URL')
KUBE_TOKEN = credentials('KUBE_TOKEN')
DOCKER_HOST_CREDS = credentials('DOCKER_HOST_CREDS')
DOCKER_SERVER = credentials('DOCKER_SERVER')
DOCKER_USERNAME = credentials('DOCKER_USERNAME')
DOCKER_PASSWORD = credentials('DOCKER_PASSWORD')
}

  stages {
  stage('Export Version & Name') {
      steps {
        sh '$DOCKER_HOST'
        sh '$DOCKER_HOST_CREDS'
        sh 'export VERSION=$(cat package.json | jq -r ".version") && echo $VERSION > VERSION'
        sh 'export NAME=$(cat package.json | jq -r ".name" | tr "[:upper:]" "[:lower:]") && echo $NAME > NAME'
      }
    }
    stage('Build Image') {
        steps {
          sh 'docker build -t $DOCKER_SERVER/$(cat NAME):$(cat VERSION) .'
        }
      }
      stage('Push Image') {
          steps {
            sh 'docker login $DOCKER_SERVER -u=$DOCKER_USERNAME -p=$DOCKER_PASSWORD'
            sh 'docker push $DOCKER_SERVER/$(cat NAME):$(cat VERSION)'
          }
        }
        stage('Deploy') {
            steps {
              sh 'echo Deployed'
            }
          }
  }
}
