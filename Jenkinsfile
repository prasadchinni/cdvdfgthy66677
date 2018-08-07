pipeline {
  agent any
  stages {
    stage('Export Version & Name') {
      steps {
        sh 'node /etc/toolbox/detector'
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
      sh 'node /etc/toolbox/deployer'
      }
    }
    stage('SonarQube Analysis') {
      steps {
        sh '$SONAR_SCANNER_HOME/bin/sonar-scanner -Dsonar.java.binaries=$PWD -Dsonar.projectKey=${JOB_NAME%%/*} -Dsonar.projectName=${JOB_NAME%%/*} -Dsonar.projectVersion=$(cat VERSION) -Dsonar.sources=. -Dsonar.host.url=$SONARQUBE_SERVER -Dsonar.login=$SONARQUBE_USERNAME -Dsonar.password=$SONARQUBE_PASSWORD -Dsonar.exclusions=node_modules/**,.git/**'
      }
    }
  }
  environment {
    KUBE_URL = credentials('KUBE_URL')
    KUBE_TOKEN = credentials('KUBE_TOKEN')
    DOCKER_SERVER = credentials('DOCKER_SERVER')
    DOCKER_USERNAME = credentials('DOCKER_USERNAME')
    DOCKER_PASSWORD = credentials('DOCKER_PASSWORD')
    SONARQUBE_SERVER = credentials('SONARQUBE_SERVER')
    SONARQUBE_USERNAME = credentials('SONARQUBE_USERNAME')
    SONARQUBE_PASSWORD = credentials('SONARQUBE_PASSWORD')
    SERVERS = credentials('SERVERS')
    SONAR_SCANNER_HOME = tool 'SonarQube Scanner'
  }
}
