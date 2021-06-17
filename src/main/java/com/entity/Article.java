package com.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class Article implements Serializable {

    private Integer id;

    private String title;

    private String author;


    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createDate;

    //标明属于哪个类型 暂定（1：关于我，2：文章，3：心情）
    private String type;

    private String titleImage;

    private String content;

    private Integer likes;
}
