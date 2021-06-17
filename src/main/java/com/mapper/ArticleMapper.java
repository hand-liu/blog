package com.mapper;

import com.entity.Article;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface ArticleMapper {

    List<Article> list(@Param("params") Map<String, Object> params);
}
