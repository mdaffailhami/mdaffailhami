import 'package:flutter/material.dart';
import 'package:mdaffailhami/widgets/responsive_builder.dart';

import 'banner.dart';

class MyAppBar extends StatelessWidget {
  const MyAppBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      automaticallyImplyLeading: false,
      pinned: true,
      expandedHeight: 350,
      flexibleSpace: FlexibleSpaceBar(
        background: MyBanner(),
      ),
      title: MyResponsiveBuilder((_, isSmall, isMedium, isLarge) {
        if (isSmall) {
          return Stack(
            alignment: AlignmentDirectional.centerStart,
            children: [
              IconButton(
                onPressed: () {
                  Scaffold.of(context).openDrawer();
                },
                icon: Icon(Icons.menu),
              ),
              Center(child: Text('MDI')),
            ],
          );
        } else {
          return Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Text('MDI'),
              SizedBox(
                height: kToolbarHeight,
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    TextButton(
                      onPressed: () {},
                      style: TextButton.styleFrom(primary: Colors.white),
                      child: Text('About Me'),
                    ),
                    TextButton(
                      onPressed: () {},
                      style: TextButton.styleFrom(primary: Colors.white),
                      child: Text('My Skills'),
                    ),
                  ],
                ),
              )
            ],
          );
        }
      }),
    );
  }
}
