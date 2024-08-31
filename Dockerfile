# Build stage
FROM maven:3.9.2-openjdk-21 AS build
WORKDIR /app

COPY . .
RUN mvn clean package -DskipTests

# Run stage
FROM openjdk:21.0.0-jdk-slim
WORKDIR /app

COPY --from=build /app/target/SkyEdge-0.0.1-SNAPSHOT.jar skyedge.jar
EXPOSE 8080 

ENTRYPOINT ["java","-jar","skyedge.jar"]
