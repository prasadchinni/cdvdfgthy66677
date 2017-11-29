pipeline {
  agent any

  stages {
  stage('Export Version') {
      steps {
        sh 'printenv'
        sh 'export VERSION=$(cat package.json | jq -r ".version") && echo $VERSION > VERSION'
      }
    }
    stage('Build Image') {
        steps {
          sh 'docker build -t $DOCKER_SERVER/$DOCKER_IMAGE:$(cat VERSION) .'
        }
      }
      stage('Push Image') {
          steps {
            sh 'docker login $DOCKER_SERVER -u=$DOCKER_USERNAME -p=$DOCKER_PASSWORD'
            sh 'docker push $DOCKER_SERVER/$DOCKER_IMAGE:$(cat VERSION)'
          }
        }
        stage('Deploy') {
            steps {
              sh 'echo 'Deployed''
            }
          }
  }
}
